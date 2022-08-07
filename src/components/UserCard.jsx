import React, {useState, useEffect} from 'react'

function UserCard({number, name}) {
    const [first, setFirst] = useState()
    const [second, setSecond] = useState()
    const [third, setThird] = useState()
    const [total, setTotal] = useState()
    useEffect(()=>{
        if(first || second || third) setTotal(+(first ? first : 0) + +(second ? second : 0) + +(third ? third : 0))
        if((first === '' || !first) && (second === '' || !second) && (third === '' || !third)) setTotal('')
    }, [total, first, second, third])
    const handleFirstChange = (e) => setFirst(e.target.value)
    const handleSecondChange = (e) => setSecond(e.target.value)
    const handleThirdChange = (e) => setThird(e.target.value)
  return (
    <div className='flex items-center justify-between user-card shadow-md border pl-3'>
        <h1 className="user-text uppercase font-semibold"> {name}</h1>
        <div className="scores flex items-center">
            <input type="text" value={first === 0 ? '' : first} className='bg-gray-100 w-14 pl-4 border h-20 font-semibold user-text block' onChange= {(e) => handleFirstChange(e)}/>
            <input type="text" value={second === 0 ? '' : second} onChange= {(e) => handleSecondChange(e)} className='bg-gray-100 w-14 pl-4 border h-20 font-semibold user-text block'/>
            <input type="text" value={third === 0 ? '' : third} onChange= {(e) => handleThirdChange(e)} className='bg-gray-100 w-14 pl-4 border h-20 font-semibold user-text block'/>
            <div className='text-black bg-gray-100 w-14 flex items-center justify-center border h-20 font-bold user-text block'>{total}</div>
        </div>
    </div>
  )
}

export default UserCard