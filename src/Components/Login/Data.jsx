

import { Link } from 'react-router-dom';

function Data() {

    return (
        <div className="div-container">
            <div className="div-Login-container">
                <div className="container">

                    <div className="div-icon">
                        <a className="form-title">Iniciar sesión</a>
                    </div>

                    <form className="form-Login">
                        <div className="txt_field">
                            <input
                                type="email"
                                name='emailLogin'
                                required />
                            <span></span>
                            <label>Correo electrónico</label>
                        </div>

                        <div className="txt_field">
                            <input
                                type="password"
                                name='passLogin'
                                required />
                            <span></span>
                            <label>Contraseña</label>
                        </div>

                        <button type='submit' className='form-btn'>Iniciar sesión</button>

                    </form>
                    <div className="signup_link">
                        ¿No cuentas con alguna cuenta? <Link className='form-link' to="/Registro">Crear cuenta</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Data;