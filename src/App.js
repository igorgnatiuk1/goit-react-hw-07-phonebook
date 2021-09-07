
import Layout from './components/Layout/Layout';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import styles from './App.module.css'

export default function App() {
    return (
        <Layout >
            <div className={styles.section}>
            <h1 >PhoneBook</h1>
            <Form />

            <h2>Contacts</h2>
            <Filter />
            <ContactList />
            </div>
        </Layout>
    );
}