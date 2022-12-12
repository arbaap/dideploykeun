import React from "react";

class HubungiKamiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubmitted: false, emailError: true, pesanError: true };
  }

  handleEmailChange(event) {
    const email = event.target.value;
    const isEmpty = email === "";
    this.setState({ emailError: isEmpty });
  }
  handlePesanChange(event) {
    const pesan = event.target.value;
    const isEmpty = pesan === "";
    this.setState({ pesanError: isEmpty });
  }
  handleSubmitted() {
    if (!this.state.emailError && !this.state.pesanError)
      this.setState({ isSubmitted: true });
  }

  render() {
    let hubungiKamiForm = "";
    let emailErrorText = "";
    let pesanErrorText = "";

    if (this.state.emailError) {
      emailErrorText = (
        <p className="hubungikamiform-message-error">
          Masukkan Alamat Email Anda
        </p>
      );
    }
    if (this.state.pesanError) {
      pesanErrorText = (
        <p className="hubungikamiform-message-error">Masukkan Pesan Anda</p>
      );
    }

    if (this.state.isSubmitted) {
      hubungiKamiForm = (
        <div className="hubungiKamiForm-submit-message">Pesan Terkirim</div>
      );
    } else {
      hubungiKamiForm = (
        <form
          onSubmit={() => {
            this.handleSubmitted();
          }}
        >
          <p>Alamat Email (Wajib Isi)</p>
          <input
            onChange={(event) => {
              this.handleEmailChange(event);
            }}
          />
          {emailErrorText}
          <p>Pesan (Wajib Isi)</p>
          <textarea
            onChange={(event) => {
              this.handlePesanChange(event);
            }}
          />
          {pesanErrorText}
          <input type="submit" value="kirim" />
        </form>
      );
    }

    return <div className="hubungiKamiForm">{hubungiKamiForm}</div>;
  }
}

export default HubungiKamiForm;
