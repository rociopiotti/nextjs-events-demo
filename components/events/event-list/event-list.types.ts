export type EventListProps = {
    items: { [key: string]: any };
};

export type EventData = {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
};
