import Main from "../../components/Layout/Layout";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <Main Heading="Contact Us" SubHead="Let us help you" Body={Body()} />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <div className="body">
        <h1>Get in touch</h1>
        
        <div className="matrix">
            <div className="row">
                <div className="col">
                    <form action="">
                        <input type="text" placeholder="Full Name"/>
                        <input type="text" placeholder="Email"/>
                        <textarea rows="10" placeholder="Message"></textarea>
                    </form>
                </div>
                <div className="col">
                    
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};
