const Status200 = ({ data }: { data: any }) => {
    return {
        "StatusCode": 200,
        "Message": "Success",
        "Results": data
    }
}

const Status201 = ({ data }: { data: any }) => {
    return {
        "StatusCode": 201,
        "Message": "Created",
        "Results": data
    }
}
const Status401 = () => {
    return {
        "StatusCode": 401,
        "Message": "Unauthorized",
    }
}

export { Status200, Status201, Status401 }