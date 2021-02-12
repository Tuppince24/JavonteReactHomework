import React, {useState, useEffect} from "react";
import API from '../../utils/API';



const Table = () => {
    const [user, setUser] = useState([]); 
    const [search, setSearch] = useState([]);

    useEffect(()=> {
        API.search().then(({data}) => {
            setUser(data.results);
        })
    },[])

    // Filter employees on search by first name, last name, email, or phone 
    useEffect(()=> {
        console.log("im here 1");
        let search = user.filter(user => user.name.first.toLowerCase().includes(search.toLowerCase()),
            user.name.last.toLowerCase().includes(user.toLowerCase()),
            user.email.toLowerCase().includes,
            user.phone.includes(),
            user.dob.includes())
        setSearch(search)
        console.log("im here two");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const renderUser= () => {
        let data; 
        search.length ? data=search : data=search
        return data.map((item, index)=> (
            <tr key={index}>
                <td>{index+1}</td>
                <td> <img src={item.picture.medium} 
                            alt={`{${item.name.firstname}_${item.name.last}}`}></img>
                </td>
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.dob.date}</td>
            </tr>
        ))
    }

    return(
        <div>
        <Table className="text-center" striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {
                  renderUser()
                }
            </tbody>
        </Table>
        </div>
    )
}

export default Table