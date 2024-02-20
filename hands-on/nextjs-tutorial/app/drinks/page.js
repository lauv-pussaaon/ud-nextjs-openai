import Link from "next/link";
import Image from "next/image";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

async function fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
}

async function DrinkPage() {
    const data = await fetchData();
    return (
        <ul className="grid sm:grid-cols-2 gap-6 mt-6">
            {data?.drinks?.map((item) => (
                <li key={item.idDrink}>
                    <Link
                        href={`/drinks/${item.idDrink}`}
                        className="text-xl font-medium"
                    >
                        <div className="relative h-48 mb-4">
                            <Image
                                src={item.strDrinkThumb}
                                fill
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
                                alt={item.strDrink}
                                className="rounded-md object-cover"
                            />
                        </div>
                        {item.strDrink}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default DrinkPage;
