interface IProps {
    title: string;
    subTitle: string;
}

const MainHeading = ({ title, subTitle }: IProps) => {
    return (
        <div className="section-gap">
            <span className="uppercase text-accent font-semibold leading-4">
                {subTitle}
            </span>
            <h2 className="text-primary font-bold text-4xl italic">{title}</h2>
        </div>
    );
};

export default MainHeading;
