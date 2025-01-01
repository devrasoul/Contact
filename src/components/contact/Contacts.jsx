import Contact from './Contact'
import Spinner from "../Spinner";

const Contacts = ({contacts, spinner}) =>{

    return(
        <div className="container">
            <section className="my-2 text-center">
              <button className="btn btn-primary px-5">افزودن</button>
            </section>

            <h5>مخاطبین</h5>
            <hr />
            {
              spinner?  <Spinner />
              :
                <section>
                {
                  contacts.length > 0 ?
                    contacts.map(contact => <Contact contact={contact} />)                   
                    : <p>contact not found</p>
                }                  
                </section>
            }
        </div>
    );
}

export default Contacts;