import {useState} from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const checkList = ['JavaScript', 'Java', 'Python'];
    const [checked, setChecked] = useState([]);

    const [radio, setRadio] = useState('');

    const [user, setUser] = useState({
        name: '',
        password: '',
        checked: [],
        radio: '',
    });

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangePass = (e) => {
        setPassword(e.target.value);
    };

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const handleRadio = (event) => {
        setRadio(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCheck = [...checked];
        setUser({
            name: name,
            password: password,
            checked: newCheck,
            radio: radio,
        });
    };
    return (
        <div className='App'>
            <form style={{marginTop: '50px'}} onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type='text'
                            onChange={(e) => handleChangeName(e)}
                        />
                    </label>

                    <label>
                        Password:
                        <input
                            type='password'
                            onChange={(e) => handleChangePass(e)}
                        />
                    </label>
                </div>
                <div>
                    <h3>Your gender</h3>
                    <input
                        type='radio'
                        id='html'
                        name='gender'
                        value='Male'
                        onChange={handleRadio}
                        defaultChecked={true}
                    />
                      <label htmlFor='html'>Male</label>
                    <input
                        type='radio'
                        id='css'
                        name='gender'
                        value='Female'
                        onChange={handleRadio}
                    />
                      <label htmlFor='css'>Female</label> {' '}
                    <input
                        type='radio'
                        id='javascript'
                        name='gender'
                        value='Other'
                        onChange={handleRadio}
                    />
                    <label htmlFor='javascript'>Other</label>
                </div>
                <div>
                    <h3>Languages:</h3>
                    {checkList.map((item, index) => (
                        <span key={index}>
                            <input
                                value={item}
                                type='checkbox'
                                onChange={handleCheck}
                            />
                            <span>{item}</span>
                        </span>
                    ))}
                </div>

                <br></br>
                <br></br>
                <input type='submit' value='Submit' className='submit' />
            </form>
            <hr></hr>

            <h3>
                Name: <span>{user.name}</span>
            </h3>
            <hr></hr>
            <h3>
                Password: <span>{user.password}</span>
            </h3>
            <hr></hr>
            <h3>
                Gender: <span>{user.radio}</span>
            </h3>
            <hr></hr>

            <h3>Vehicle: </h3>

            {user.checked.map((value, index) => (
                <div key={index}>
                    <p>{value}</p>
                </div>
            ))}
            <hr></hr>
        </div>
    );
}

export default App;
