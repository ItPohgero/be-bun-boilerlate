const Status100 = () => {
	return {
		StatusCode: 100,
		Message: "Continue",
	};
};

const Status101 = () => {
	return {
		StatusCode: 101,
		Message: "Switching Protocols",
	};
};

const Status200 = ({ data }: { data: unknown }) => {
	return {
		StatusCode: 200,
		Message: "OK",
		Results: data,
	};
};

const Status201 = ({ data }: { data: unknown }) => {
	return {
		StatusCode: 201,
		Message: "Created",
		Results: data,
	};
};

const Status202 = ({ data }: { data: unknown }) => {
	return {
		StatusCode: 202,
		Message: "Accepted",
		Results: data,
	};
};

const Status203 = ({ data }: { data: unknown }) => {
	return {
		StatusCode: 203,
		Message: "Non-Authoritative Information",
		Results: data,
	};
};

const Status204 = () => {
	return {
		StatusCode: 204,
		Message: "No Content",
	};
};

const Status205 = () => {
	return {
		StatusCode: 205,
		Message: "Reset Content",
	};
};

const Status206 = ({ data }: { data: unknown }) => {
	return {
		StatusCode: 206,
		Message: "Partial Content",
		Results: data,
	};
};

const Status300 = () => {
	return {
		StatusCode: 300,
		Message: "Multiple Choices",
	};
};

const Status301 = () => {
	return {
		StatusCode: 301,
		Message: "Moved Permanently",
	};
};

const Status302 = () => {
	return {
		StatusCode: 302,
		Message: "Found",
	};
};

const Status303 = () => {
	return {
		StatusCode: 303,
		Message: "See Other",
	};
};

const Status304 = () => {
	return {
		StatusCode: 304,
		Message: "Not Modified",
	};
};

const Status305 = () => {
	return {
		StatusCode: 305,
		Message: "Use Proxy",
	};
};

const Status306 = () => {
	return {
		StatusCode: 306,
		Message: "Switch Proxy",
	};
};

const Status307 = () => {
	return {
		StatusCode: 307,
		Message: "Temporary Redirect",
	};
};

const Status400 = ({ data }: { data: unknown }) => {
	return {
		StatusCode: 400,
		Message: "Bad Request",
		Data: data,
	};
};

const Status401 = () => {
	return {
		StatusCode: 401,
		Message: "Unauthorized",
	};
};

const Status402 = () => {
	return {
		StatusCode: 402,
		Message: "Payment Required",
	};
};

const Status403 = () => {
	return {
		StatusCode: 403,
		Message: "Forbidden",
	};
};

const Status404 = () => {
	return {
		StatusCode: 404,
		Message: "Not Found",
	};
};

const Status405 = () => {
	return {
		StatusCode: 405,
		Message: "Method Not Allowed",
	};
};

const Status406 = () => {
	return {
		StatusCode: 406,
		Message: "Not Acceptable",
	};
};

const Status407 = () => {
	return {
		StatusCode: 407,
		Message: "Proxy Authentication Required",
	};
};

const Status408 = () => {
	return {
		StatusCode: 408,
		Message: "Request Timeout",
	};
};

const Status409 = () => {
	return {
		StatusCode: 409,
		Message: "Conflict",
	};
};

const Status410 = () => {
	return {
		StatusCode: 410,
		Message: "Gone",
	};
};

const Status411 = () => {
	return {
		StatusCode: 411,
		Message: "Length Required",
	};
};

const Status412 = () => {
	return {
		StatusCode: 412,
		Message: "Precondition Failed",
	};
};

const Status413 = () => {
	return {
		StatusCode: 413,
		Message: "Payload Too Large",
	};
};

const Status414 = () => {
	return {
		StatusCode: 414,
		Message: "URI Too Long",
	};
};

const Status415 = () => {
	return {
		StatusCode: 415,
		Message: "Unsupported Media Type",
	};
};

const Status416 = () => {
	return {
		StatusCode: 416,
		Message: "Range Not Satisfiable",
	};
};

const Status417 = () => {
	return {
		StatusCode: 417,
		Message: "Expectation Failed",
	};
};

const Status418 = () => {
	return {
		StatusCode: 418,
		Message: "I'm a teapot",
	};
};

const Status421 = () => {
	return {
		StatusCode: 421,
		Message: "Misdirected Request",
	};
};

const Status422 = () => {
	return {
		StatusCode: 422,
		Message: "Unprocessable Entity",
	};
};

const Status423 = () => {
	return {
		StatusCode: 423,
		Message: "Locked",
	};
};

const Status424 = () => {
	return {
		StatusCode: 424,
		Message: "Failed Dependency",
	};
};

const Status426 = () => {
	return {
		StatusCode: 426,
		Message: "Upgrade Required",
	};
};

const Status428 = () => {
	return {
		StatusCode: 428,
		Message: "Precondition Required",
	};
};

const Status429 = () => {
	return {
		StatusCode: 429,
		Message: "Too Many Requests",
	};
};

const Status431 = () => {
	return {
		StatusCode: 431,
		Message: "Request Header Fields Too Large",
	};
};

const Status451 = () => {
	return {
		StatusCode: 451,
		Message: "Unavailable For Legal Reasons",
	};
};

const Status500 = () => {
	return {
		StatusCode: 500,
		Message: "Internal Server Error",
	};
};

const Status501 = () => {
	return {
		StatusCode: 501,
		Message: "Not Implemented",
	};
};

const Status502 = () => {
	return {
		StatusCode: 502,
		Message: "Bad Gateway",
	};
};

const Status503 = () => {
	return {
		StatusCode: 503,
		Message: "Service Unavailable",
	};
};

const Status504 = () => {
	return {
		StatusCode: 504,
		Message: "Gateway Timeout",
	};
};

const Status505 = () => {
	return {
		StatusCode: 505,
		Message: "HTTP Version Not Supported",
	};
};

const Status506 = () => {
	return {
		StatusCode: 506,
		Message: "Variant Also Negotiates",
	};
};

const Status507 = () => {
	return {
		StatusCode: 507,
		Message: "Insufficient Storage",
	};
};

const Status508 = () => {
	return {
		StatusCode: 508,
		Message: "Loop Detected",
	};
};

const Status510 = () => {
	return {
		StatusCode: 510,
		Message: "Not Extended",
	};
};

const Status511 = () => {
	return {
		StatusCode: 511,
		Message: "Network Authentication Required",
	};
};

export {
	Status100,
	Status101,
	Status200,
	Status201,
	Status202,
	Status203,
	Status204,
	Status205,
	Status206,
	Status300,
	Status301,
	Status302,
	Status303,
	Status304,
	Status305,
	Status306,
	Status307,
	Status400,
	Status401,
	Status402,
	Status403,
	Status404,
	Status405,
	Status406,
	Status407,
	Status408,
	Status409,
	Status410,
	Status411,
	Status412,
	Status413,
	Status414,
	Status415,
	Status416,
	Status417,
	Status418,
	Status421,
	Status422,
	Status423,
	Status424,
	Status426,
	Status428,
	Status429,
	Status431,
	Status451,
	Status500,
	Status501,
	Status502,
	Status503,
	Status504,
	Status505,
	Status506,
	Status507,
	Status508,
	Status510,
	Status511,
};
