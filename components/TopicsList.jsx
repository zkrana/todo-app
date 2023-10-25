'use client'
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useEffect, useState } from "react"; // Import useState and useEffect

const TopicsList = () => {
  const [topics, setTopics] = useState([]); // Initialize topics state
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null); // Initialize error state

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const data = await res.json();
        setTopics(data.topics); // Set topics state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError(error); // Set error state in case of fetch error
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchTopics(); // Call the fetchTopics function on component mount
  }, []); // Empty dependency array means this effect runs only once on mount

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div>Error loading topics: {error.message}</div>; // Display error message if there's an error
  }

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
