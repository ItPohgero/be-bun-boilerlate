const ViewLogin = ({ qrcode }: { qrcode: string }) => {
	return (
		<>
			<head>
				<link
					href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
					rel="stylesheet"
				/>
				<title>Auth Login</title>
			</head>
			<div class="min-h-screen grid grid-cols-12">
				<div class="col-span-9 bg-gray-200 flex justify-center items-center">
					Login
				</div>
				<div class="bg-white flex justify-center items-center w-full col-span-3">
					<img src={qrcode} alt="img" />
				</div>
			</div>
		</>
	);
};

export default ViewLogin;
