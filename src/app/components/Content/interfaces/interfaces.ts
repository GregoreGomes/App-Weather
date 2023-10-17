export interface HeaderProps {
    cityName?: string;
}

export interface DataProps {
    city: CityProps;
    list: ListProps[];
}

export interface CityProps {
    country: string;
    id: number;
    name: string;
}

export interface ListProps {
    clouds: number;
    dt: number;
    dt_txt: string;
    main: TempInformation;
    weather: WeatherProps[]
}

export interface TempInformation {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface WeatherProps {
    id: number;
    main: string;
    description: string;
    icon: string;
}
