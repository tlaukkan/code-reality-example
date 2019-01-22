import {
    AddObjectTool,
    AnimatorController,
    AvatarController,
    CollidableController,
    ExampleController,
    ExampleSystemController,
    IdentityController,
    InterfaceController,
    InterfaceSystemController,
    KeyboardAndMouseDevice,
    LabelController, MovementState,
    PrimaryControllerDevice,
    QuaternionController,
    registerComponentController, registerStateFactory,
    registerSystemController,
    SpaceSystemController, States,
    StateSystemController, TeleportTool,
    WalkTool
} from "code-reality";
import {ToolSelectorTool} from "code-reality/lib/src/browser/system/interface/tool/ToolSelectorTool";

registerSystemController(ExampleSystemController.DEFINITION);
registerSystemController(InterfaceSystemController.DEFINITION);
registerSystemController(StateSystemController.DEFINITION);
registerSystemController(SpaceSystemController.DEFINITION);

registerComponentController(InterfaceController.DEFINITION);
registerComponentController(ToolSelectorTool.DEFINITION);

registerComponentController(AddObjectTool.DEFINITION);
registerComponentController(WalkTool.DEFINITION);
registerComponentController(TeleportTool.DEFINITION);

registerComponentController(PrimaryControllerDevice.DEFINITION);
registerComponentController(KeyboardAndMouseDevice.DEFINITION);

registerComponentController(ExampleController.DEFINITION);
registerComponentController(CollidableController.DEFINITION);
registerComponentController(AnimatorController.DEFINITION);
registerComponentController(AvatarController.DEFINITION);
registerComponentController(IdentityController.DEFINITION);
registerComponentController(LabelController.DEFINITION);
registerComponentController(QuaternionController.DEFINITION);

registerStateFactory(States.STATE_MOVEMENT, () => { return new MovementState() });

// Set terrain function.
(window as any).TINY_TERRAIN.heightFunctions.set('custom', (x: number, y: number) => {
    const d = Math.sqrt(x*x + y*y);
    return 20 + 20 * ( -1 + 1 / (1 + d * d / 500));
});

// Fix facebook bug adding hash to url
if (window.location.hash && window.location.hash == '#_=_') {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}