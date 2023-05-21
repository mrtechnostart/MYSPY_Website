import React from 'react'
const Download = (props) => {
  const data = props.data
    return (
    <div style={{ minHeight: "100vh" }}>
      <div className="container py-4 text-center">
        <h1>{props.title} Creations</h1>
      </div>
      <div className="container">
        {data.map((element) => {
            if (element.title === props.title){
                return (
                    <div className="container d-flex justify-space-between">
              <p>{element.name}</p>
              <a
                href={element.link}
                className="btn btn-primary"
                target="_blank"
              >
                Download Now
              </a>
            </div>
                )
            }
        })}
      </div>
    </div>
  )
}

export default Download
