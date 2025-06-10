import HomePage from "@/components/Home";
import { getData } from "@/lib/csStack";

export default async function page() {
	const data = await getData({
		contentTypeUid: "pages",
		condition: [{ key: "url", value: "/testing-page" }],
	});
	console.log(data);
	return <HomePage />;
}
