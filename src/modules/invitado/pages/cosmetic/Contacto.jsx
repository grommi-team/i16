import React, { Component, Fragment } from "react";

export default class Contacto extends Component {
  render() {
    return (
      <Fragment>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Contactanos</h3>
            <p>Calle Santa Marta 208, Arequipa</p>
            <p>CEL. 992248719</p>
            <h5>HORARIO DE ATENCIÓN</h5>
            <p>Lun-Sab : 15:30pm - 19:00pm</p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-4">
            <form action="">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Coloque su nombre"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Asunto"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="mensaje"
                  className="form-control"
                ></textarea>
              </div>

                <button className="btn btn-success form-control">
                    Enviar
                </button>

            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
