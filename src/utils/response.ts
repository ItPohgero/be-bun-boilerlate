const Status200 = ({ data }: { data: unknown }) => {
	return {
		StatusCode: 200,
		Message: "Success",
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

const Status200Authorize = ({ data }: { data: unknown }) => {
	return {
		StatusCode: 200,
		Message: "Authorize",
		Results: data,
	};
};

const Status400 = ({ data }: { data: unknown }) => {
	return {
		StatusCode: 401,
		Message: "Error",
		Data: data,
	};
};
const Status401 = () => {
	return {
		StatusCode: 401,
		Message: "Unauthorized",
	};
};

export { Status200, Status200Authorize, Status201, Status400, Status401 };
