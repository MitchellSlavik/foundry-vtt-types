/**
 * The Tiles canvas layer which provides a container for {@link Tile} objects which are rendered immediately above the
 * {@link BackgroundLayer} and below the {@link GridLayer}.
 *
 * @see {@link Tile}
 * @see {@link TileHUD}
 */
declare class TilesLayer extends PlaceablesLayer<Tile> {
  /** @override */
  static get layerOptions(): PlaceablesLayer.LayerOptions;

  /**
   * Tile objects on this layer utilize the TileHUD
   */
  get hud(): TileHUD;

  /**
   * @override
   * @remarks Returns void
   */
  deactivate(): any;

  /** @override */
  protected _onDragLeftStart(event: PIXI.InteractionEvent): void;

  /** @override */
  protected _onDragLeftMove(event: PIXI.InteractionEvent): void;

  /** @override */
  protected _onDragLeftDrop(event: PIXI.InteractionEvent): void;

  /** @override */
  protected _onDragLeftCancel(event: PIXI.InteractionEvent): void;

  /**
   * Handle drop events for Tile data on the Tiles Layer
   * @param event - The concluding drag event
   * @param data  - The extracted Tile data
   */
  protected _onDropTileData(event: DragEvent, data: Tile['data']): Promise<Tile>;
}
