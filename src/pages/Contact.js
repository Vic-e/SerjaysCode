export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>

      <p>
        Thank you for considering the <i>Nanny Network</i> for your babysitting needs. We
        are happy to answer any questions you may have and provide you with more
        information about our services.
      </p>

      <p>
        For more information or to contact us, please use the form below or
        reach out to us at the following:
      </p>

      <h2>Phone: 888-BABY-SIT(222-9748)</h2>
      <h2>Email: support@theNannyNetwork.com</h2>

      <p>
        We look forward to hearing from you and helping you with all of your
        babysitting needs.
      </p>


      <form>
        <label name="name">Name:</label>
        <input type="text" id="name" name="name" /> <br></br>
        <label name="email">Email:</label>
        <input type="text" id="email" name="email" /> <br></br>
        <label name="phone">Phone:</label>
        <input type="text" id="phone" name="phone" /> <br></br>
        <label name="message">Message:</label>
        <br></br>
        <input type="text" id="message" name="message" /> <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
