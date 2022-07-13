import { Button } from 'react-bootstrap';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

import { CSVLink } from "react-csv";


const doc = new jsPDF();

const Home = () => {

  // const employees = allEmployees.map((employee) => employee)

  const handleSubmit = () => {
    autoTable(doc, {
      head: [['Id', 'Name', 'Email']],
      body: [
        [1, 'Egide', 'egide@example.com'],
        [2, 'Patrick', 'patrick@example.com'],
        [1, 'Egide', 'egide@example.com'],
        [2, 'Patrick', 'patrick@example.com'],
        [1, 'Egide', 'egide@example.com'],
        [2, 'Patrick', 'patrick@example.com'],
      ],
    })
    doc.save("employees.pdf");
  }

  const csvData = [
    ["ID", "NAME", "EMAIL"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];

  return (
    <div style={{padding: '50px', color: '#fff', fontWeight: 'bold', fontSize: '1.3rem'}}>
        <Button variant="success" style={{margin: '30px'}} onClick={handleSubmit}>
            Export pdf
        </Button>
        <CSVLink data={csvData}>Download CSV</CSVLink>;
    </div>
  );
}

export default Home;
