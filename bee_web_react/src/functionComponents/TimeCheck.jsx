import axios from "axios"

const TimeCheck = () => {
  return new Promise((resolve, reject) => {
    if (sessionStorage.length < 0) {
      this.props.history.push("/login");
    } else {
      reject()
    }
  })

}

export default TimeCheck
