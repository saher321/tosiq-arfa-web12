import { useState } from "react"

const useToggle = () => {
    const [val, setVal] = useState(true)
    const toggle = () => setVal(!val);
    return [val, toggle]
}
export default useToggle