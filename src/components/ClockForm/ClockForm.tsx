import { ChangeEvent, useState } from 'react'
import './ClockForm.css'
import { TClockData } from '../../types/types'

interface Props {
    onAddClock: (value: TClockData) => void
}

export const ClockForm = ({ onAddClock }: Props) => {
    const [formData, setFormData] = useState({
        name: '',
        timezone: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'name') {
            setFormData({...formData, name: e.target.value})
        } else {
            setFormData({...formData, timezone: e.target.value})
        }
    }

    const handelSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formData.name != '' && formData.timezone !=''){
            onAddClock(formData);
        } else {
            console.log('введите данные')
        }
        
    }

    return (
        <form 
        className='clock-form' 
        onSubmit={handelSubmit}
        >
            <div className="container-clock-form">
                <label htmlFor="name" >
                    Название:
                </label>
                <input 
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div className="container-clock-form">
            <label htmlFor="timezone">
                    Временая зона:
                </label>
                <input 
                type="number"
                name='timezone'
                value={formData.timezone}
                onChange={handleChange}
                />
            </div>
            <button type='submit' className='button-clock-form'>
                Добавить
            </button>
        </form>
    )
}
