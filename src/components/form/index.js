import React, {useEffect,useState,useCallback} from 'react'

const Form = ({onSubmit, children })=>{
     const [updatedChildren, updateChildren] = useState(children);
     const [valid, updateValidity] = useState({});
    const formOnSubmit = useCallback((e,props)=>{
        if (props.onClick) props.onClick();
        e.preventDefault();
        onSubmit();
    },[onSubmit])
    const validate = useCallback((ev,props)=>{
        if(props.onChange) props.onChange(ev);
        switch(props.type){
            case "email": 
            if(!props.value.length) updateValidity(false)
            const EmailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                (EmailPattern.test(props.value)) ? updateValidity(true) : updateValidity(false)
                break;
            case "number":
                    if(!props.value.length) updateValidity(false)
                const NumberPattern = /^\(?([0-9]{10})$/;
                 (NumberPattern.test(props.value)) ? updateValidity(true) :  updateValidity(false)
                break;
            default:
                    updateValidity(false)
        }
    },[])
    const detectElement = useCallback((elements)=>{
        return elements.map((el,index)=>{
            switch(el.type){
                case "input":
                    return React.cloneElement( el, { onChange: (e)=> validate(e,el.props), key:`${el.type}-${index}`} );
                case "button":
                    return React.cloneElement( el,{ onClick : (e)=> formOnSubmit(e,el.props), key:`${el.type}-${index}`, disabled: (!valid) } );
                default:
                    return el
            }
        })
    },[formOnSubmit, valid, validate])
    useEffect(()=>{
        updateChildren(detectElement(children))
    }, [children, detectElement])
    return (
        <form>
            {updatedChildren}
            <p>{`form data is ${valid ? 'valid' : 'invalid'}`}</p>
        </form>
    )
}

export default Form;