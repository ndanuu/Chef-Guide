import React from 'react'

function Signup() {
  return (
    <section>
        <h1> Sign up Form</h1>
        <form action="">
            <label htmlFor="email">Email: </label>
                <input 
                id="email"
                defaultValue="liz@react.com"
                type="email"
                placeholder='liz@react.com' />

                <label htmlFor="password">Password:</label>
                <input 
                id='password'
                defaultValue="1234"
                type="text"
                name='password' />

                <label htmlFor="description">Description:</label>
                <textarea
                 id="description"
                 name='description'
                 defaultValue="This is a description"></textarea>

                 <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio"
                        name='employemntStatus'
                        value="unemployed" />
                        Unemployed
                    </label>

                    <label>
                        <input 
                        type="radio"
                        name='employmentStatus'
                        value="part-time" />
                        Part-time
                    </label>

                    <label>
                        <input 
                        type="radio"
                        name='employmentStatus'
                        value="full-time" 
                        defaultChecked={true}/>
                        Full-Time
                    </label>
                 </fieldset>
           

           <button>Submit</button>
        </form>
    </section>
    
  )
}

export default Signup