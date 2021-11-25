interface Props extends React.HTMLAttributes<HTMLElement>  {
  className?: string;
};

export const Container: React.FC= (props) => {
  return (
    <section className="Container flex xl:w-5/6 md:w-full bg-gray-700">
      {props.children}
    </section>
  )
};
