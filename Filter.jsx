import './Filter.css'

export const Filter = () => {
    return (
        <div className='category'>
          <div className="color">color
            <label>
                <input className='input' type='checkbox'/>
                <span>Red</span>
             </label>
             <label>
                <input className='input' type='checkbox'/>
                <span>Blue</span>
             </label>
             <label>
                <input className='input' type='checkbox'/>
                <span>Green</span>
             </label>
            
          </div>
          <div className="gender">Gender
            <label>
                <input className='input' type='checkbox'/>
                <span>Men</span>
             </label>
             <label>
                <input className='input' type='checkbox'/>
                <span>Women</span>
             </label>
          </div>

          <div className="price">price
            <label>
                <input className='input' type='checkbox'/>
                <span>0-Rs250</span>
             </label>
             <label>
                <input className='input' type='checkbox'/>
                <span>Rs250-Rs450</span>
             </label>
             <label>
                <input className='input' type='checkbox'/>
                <span>Rs450</span>
             </label>
            
          </div>

          <div className="type">type
            <label>
                <input className='input' type='checkbox'/>
                <span>Polo</span>
             </label>
             <label>
                <input className='input' type='checkbox'/>
                <span>Hoodie</span>
             </label>
             <label>
                <input className='input' type='checkbox'/>
                <span>Basic</span>
             </label>
            
          </div>
             

        </div>

    )
}