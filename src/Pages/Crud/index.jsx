import { Component } from "react";
import axios from "axios";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { showAlert } from "../../Helpers/functions";
import { apiUrl } from "../../Api";

class Crud extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      id: "",
      name: "",
      description: "",
      quantity: "",
      ubication: "",
      purchaseDate: "",
      state: "",
      employeeId: "",
    },
    tipoModal: "",
  };

  peticionGet = () => {
    axios
      .get(apiUrl + "/activos")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPost = async () => {
    delete this.state.form.id;
    delete this.state.form.employeeId;
    await axios
      .post(apiUrl + "/activos", this.state.form)
      .then(() => {
        this.modalInsertar();
        this.peticionGet();
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  peticionPut = () => {
    const data = {
      name: this.state.form.name,
      description: this.state.form.description,
      quantity: this.state.form.quantity,
      ubication: this.state.form.ubication,
      state: this.state.form.state,
      purchaseDate: this.state.form.purchaseDate,
      employeeId: this.state.form.employeeId
        ? this.state.form.employeeId
        : null,
    };
    axios.patch(apiUrl + "/activos/" + this.state.form.id, data).then(() => {
      this.modalInsertar();
      this.peticionGet();
    });
  };

  peticionDelete = () => {
    axios.delete(apiUrl + "/activos/" + this.state.form.id).then(() => {
      this.setState({ modalEliminar: false });
      this.peticionGet();
    });
  };

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  seleccionarAseet = (asset) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id: asset.id,
        name: asset.name,
        description: asset.description,
        quantity: asset.quantity,
        ubication: asset.ubication,
        purchaseDate: asset.purchaseDate,
        state: asset.state,
        employeeId: asset.employeeId,
      },
    });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidMount() {
    this.peticionGet();
  }
  render() {
    const { form } = this.state;
    return (
      <div className="container-fluid my-36">
        <div className="row mt-12">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <button
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#modalProducts"
                onClick={() => {
                  this.setState({ form: null, tipoModal: "insertar" });
                  this.modalInsertar();
                }}
              >
                <i className="fa-solid fa-cicle-plus"></i> Añadir Activo
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-lg-8 offset-0 offset-lg-2">
            <div className="table-responsive">
              <table className="table tableCRUD table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Ubicación</th>
                    <th>Fecha de compra</th>
                    <th>Estado</th>
                    <th>Id Empleado</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {this.state.data.map((asset) => (
                    <tr key={asset.id}>
                      <td>{asset.id}</td>
                      <td>{asset.name}</td>
                      <td>{asset.description}</td>
                      <td>{asset.quantity}</td>
                      <td>{asset.ubication}</td>
                      <td>{asset.purchaseDate.split("T")[0]}</td>
                      <td>{asset.state}</td>
                      <td>
                        {asset.employeeId == null
                          ? "Se encuentra en bodega"
                          : asset.employeeId}
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.modalInsertar();
                            this.seleccionarAseet(asset);
                          }}
                        >
                          <i className="fa-solid fa-edit"></i>&nbsp;
                        </button>
                        <button
                          className="btn btn-danger"
                          id={asset.id}
                          onClick={() => {
                            this.seleccionarAseet(asset);
                            this.setState({ modalEliminar: true });
                          }}
                        >
                          <i className="fa-solid fa-trash"></i>&nbsp;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader className="cursor-pointer block">
                  <span
                    className="float-right"
                    onClick={() => this.modalInsertar()}
                  >
                    x
                  </span>
                </ModalHeader>
                <ModalBody>
                  <div className="modal-body">
                    <input type="hidden" id="id" />
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        onChange={this.handleChange}
                        value={form ? form.name : ""}
                      />
                      <input
                        type="text"
                        id="description"
                        name="description"
                        className="form-control"
                        placeholder="Descripción"
                        onChange={this.handleChange}
                        value={form ? form.description : ""}
                      />
                    </div>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      className="form-control"
                      placeholder="Cantidad"
                      onChange={this.handleChange}
                      value={form ? form.quantity : ""}
                    />
                  </div>
                  <input
                    type="text"
                    id="ubication"
                    name="ubication"
                    className="form-control"
                    placeholder="Ubicación"
                    onChange={this.handleChange}
                    value={form ? form.ubication : ""}
                  />

                  <input
                    type="date"
                    id="purchaseDate"
                    name="purchaseDate"
                    className="form-control"
                    placeholder="Fecha compra"
                    onChange={this.handleChange}
                    value={form ? form.purchaseDate : ""}
                  />

                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="form-control"
                    placeholder="Estado"
                    onChange={this.handleChange}
                    value={form ? form.state : ""}
                  />

                  <input
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    className="form-control"
                    placeholder="idEmpleado"
                    onChange={this.handleChange}
                    value={form ? form.employeeId : ""}
                  />
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal === "insertar" ? (
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        if (
                          form.name === "" ||
                          form.description === "" ||
                          form.purchaseDate === "" ||
                          form.quantity === "" ||
                          form.state === "" ||
                          form.ubication === ""
                        ) {
                          showAlert(
                            "Por favor llene todos los campos",
                            "warning"
                          );
                        } else {
                          this.peticionPost();
                        }
                      }}
                    >
                      Enviar
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => this.peticionPut()}
                    >
                      Actualizar
                    </button>
                  )}
                  <button
                    className="btn btn-danger"
                    onClick={() => this.modalInsertar()}
                  >
                    Cancelar
                  </button>
                </ModalFooter>
              </Modal>

              <Modal isOpen={this.state.modalEliminar}>
                <ModalBody>
                  Estás seguro que deseas eliminar el dato {form && form.name}
                </ModalBody>
                <ModalFooter>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.peticionDelete()}
                  >
                    Sí
                  </button>
                  <button
                    className="btn btn-secundary"
                    onClick={() => this.setState({ modalEliminar: false })}
                  >
                    No
                  </button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Crud;
