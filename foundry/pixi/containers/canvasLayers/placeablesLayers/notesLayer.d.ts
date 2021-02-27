/**
 * The Notes Layer Container
 */
declare class NotesLayer extends PlaceablesLayer<Note> {
  /** @override */
  static get layerOptions(): PlaceablesLayer.LayerOptions;

  /** @override */
  activate(): this;

  /** @override */
  deactivate(): this;

  /**
   * Register game settings used by the NotesLayer
   */
  static registerSettings(): void;

  /** @override */
  protected _onMouseDown(event: PIXI.InteractionEvent): void;

  /**
   * Handle JournalEntry entity drop data
   */
  protected _onDropData(event: PIXI.InteractionEvent, data: JournalEntry): Promise<false | undefined>;

  /**
   * @defaultValue `"notesDisplayToggle"`
   */
  static TOGGLE_SETTING: string;
}
