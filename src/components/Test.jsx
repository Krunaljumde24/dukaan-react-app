import React from 'react'

let testStyle = {
    height: '400px'
}
function Test() {
    return (
        <div style={testStyle}>
            <br /><br />
            <button type='button' className='btn btn-lg btn-primary position-relative'>Button
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                </span>
            </button>



        </div>
    )
}

export default Test