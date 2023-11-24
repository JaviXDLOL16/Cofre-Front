import { Link } from "react-router-dom";

function Data() {




    return (
        <div className="div-container">
            <div className="div-register-container">


                <div className="container">
                    <div className="div-icon-regist">
                        <a className="form-title">Registro</a>
                    </div>

                    <form className="form-Regist">

                        <div className="txt_field-regist">
                            <input type="text" id="nameRegist" name="nameReg" required />
                            <span></span>
                            <label>Nombre de usuario</label>
                        </div>

                        <div className="txt_field-regist">
                            <input type="email" id="emailRegist" name="emailReg" required />
                            <span></span>
                            <label>Correo electrónico</label>
                        </div>


                        <div className="txt_field-regist">
                            <input type="password" id="passRegist" name="passReg" required />
                            <span></span>
                            <label>Contraseña</label>
                        </div>

                        <div className="txt_field-regist">
                            <input type="password" id="cpassRegist" name="passCReg" required />
                            <span></span>
                            <label>Confirmar contraseña</label>
                        </div>
                        <button type="submit" className='form-btn-regist'>Registrarse</button>
                    </form>
                    <div className="signup_link">
                        ¿Ya cuentas con alguna cuenta? <Link className='form-link-regist' to="/Inicio-sesion">Inicia sesión</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Data;