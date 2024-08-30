import './editName.css'

export default function EditName() {
  return (
    <form>
        <h1>Edit User info</h1>

        <div>
        <label htmlFor="username">User name: </label>
        <input type="text" id="username" />
        </div>

        <div>
        <label htmlFor="firstname">First Name: </label>
        <input type="text" id="fistname" />
        </div>

        <div>
        <label htmlFor="lastname">Last Name: </label>
        <input type="text" id="lastname" />
        </div>

        <div className='form-group'>
        <button type="submit" className='edit-button'>Save</button>
        <button type="submit" className='edit-button'>Cancel</button>
        </div>
    </form>
  )
}