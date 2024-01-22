import React from 'react'
import Select2 from 'react-select2-wrapper';

function tested() {
  return (<>
    <div>tested</div>
    <Select2
  multiple
  data={[
    { id: "1", text: "Alerts" },
    { id: "2", text: "Badges" },
    { id: "3", text: "Buttons" },
    { id: "4", text: "Cards" },
    { id: "5", text: "Forms" },
    { id: "6", text: "Modals" }
  ]}
  options={{
    placeholder: 'search by tags',
  }
}
/>
</>
  )
}

export default tested