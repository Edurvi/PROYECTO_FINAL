// una interface se declara una una serie de metodos y propiedades que deben ser inplementadosluego por
//una o mas clases. las interfaces vienen a suplir la imposibilidad de herencia multiple
export interface IApp {
  settings(): void;
  middlewares(): void;
  routes(): void;
  listen(): Promise<void>;
}
