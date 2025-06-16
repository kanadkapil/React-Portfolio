import profile from '../data/profile.json'; // adjust path if needed

export default function GithubCard() {
    return (
        <section className="my-10">
            <div className="flex justify-center">
                <h3 className="text-3xl font-bold">Github Stats</h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 my-10 mx-10">
                {/* GitHub Stats */}
                <div className="min-h-[100px] rounded-lg">
                    <div className="flex justify-center">
                        <img
                            className="rounded-2xl shadow-2xl"
                            src={profile.githubStats.main}
                            alt="GitHub Stats"
                        />
                    </div>
                </div>

                {/* Top Languages */}
                <div className="min-h-[100px] rounded-lg">
                    <div className="flex justify-center">
                        <img
                            className="rounded-2xl shadow-2xl"
                            src={profile.githubStats.topLangs}
                            alt="Top Languages"
                        />
                    </div>
                </div>

                {/* GitHub Streak */}
                <div className="min-h-[100px] rounded-lg ">
                    <div className="flex justify-center">
                        <img
                            className="rounded-2xl shadow-2xl"
                            src={profile.githubStats.streak}
                            alt="GitHub Streak Stats"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
