interface ICardData {
  title?: string;
  subTitle?: string;
  info: { title: string; value: string }[];
}

const Card = ({ data }: { data: ICardData }) => {
  return (
    <div className="mr-4">
      <div className="w-[300px] h-[520px] bg-darkSide shadow-sm shadow-logo overflow-hidden sm:rounded-lg border border-logo">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-logo">
            {data.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-logo">{data.subTitle}</p>
        </div>
        <div className="border-t border-logo">
          <dl>
            {data?.info.map((item, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-darkSide" : ""
                } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-logo`}
              >
                <dt className="text-sm font-medium text-logo">{item.title}</dt>
                <dd className="mt-1 text-sm text-logo sm:mt-0 sm:col-span-2">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Card;
