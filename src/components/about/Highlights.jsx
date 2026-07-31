function Highlights({ items }) {

  return (

    <div className="highlight-grid">

      {

        items.map(item => (

          <div

            key={item.id}

            className="highlight-card"

          >

            <h4>{item.title}</h4>

            <p>{item.value}</p>

          </div>

        ))

      }

    </div>

  );

}

export default Highlights;