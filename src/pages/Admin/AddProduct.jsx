import React, {useState} from 'react'

const AddProductPage = () => {
    const [inputValue, setInputValues] = useState()
    const onHandleChange = (event) => {
        // setInputValues({"name": event.taget.value})
        const name = event.target.name
        const value = event.target.value
        setInputValues(...inputValue,{ [name]:value})

    }
    const onHandleSubmit = (e) => {
        e.preventDafault()
        addProduct(inputValue)
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder="Enter Product Name" onChange={onHandleChange} name='name'/>
                <input type="text" placeholder="Enter Product Price" onChange={onHandleChange} name= 'price'/>
                <button type='submit'>Add New</button>
            </form>
        </div>
    )
}

export default AddProductPage