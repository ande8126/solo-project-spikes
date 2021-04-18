import React from 'react'

const RequestItem = () => {
    return (
        <div>
            <h3>Request: Pool closures</h3>
            <p>Sent: 1/29/2021</p>
            <p>Agency: MPLS parks and rec department</p>
            <p>Email:</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
                ut ex molestie blandit. Etiam et turpis sit amet risus mollis
                interdum. Suspendisse et justo vitae metus bibendum fringilla sed
                sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
                elementum eget. Praesent efficitur eros vitae nunc interdum, eu
                interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
                Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
                luctus. Duis a sapien metus.
            </p>
            <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
            Response
            </label>
            <br />
            <button>delete</button>
        </div>
    )
}

export default RequestItem
