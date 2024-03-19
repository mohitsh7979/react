function Table_data() {
  const data = [
    {
      id: 1,
      name: "mohit",
      email: "mohit@gmail.com",
      city: "jaipur",
    },
    {
      id: 2,
      name: "rohit",
      email: "rohit@gmail.com",
      city: "jodhpur",
    },
    {
      id: 3,
      name: "ankit",
      email: "ankit@gmail.com",
      city: "udaipur",
    },
  ];

  return (
    <>
      <div className="table">
        <h1>Table Data</h1>
        <table border={""}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
       
          {data.map((item) =>
            item.name == "rohit" ?
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
            </tr>
            : null
          )}
      
        </table>
      </div>
    </>
  );
}

export default Table_data;
