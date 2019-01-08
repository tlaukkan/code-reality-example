import {
    AnimatorController,
    AvatarController,
    CollidableController,
    EntityTool,
    ExampleController,
    ExampleSystemController,
    IdentityController,
    InterfaceController,
    InterfaceSystemController,
    KeyboardAndMouseDevice,
    LabelController, MovementState,
    MovementTool,
    QuaternionController,
    registerComponentController, registerStateFactory,
    registerSystemController,
    SpaceSystemController, States,
    StateSystemController,
    ViveControllerDevice
} from "code-reality";

registerSystemController(ExampleSystemController.DEFINITION);
registerSystemController(InterfaceSystemController.DEFINITION);
registerSystemController(StateSystemController.DEFINITION);

registerComponentController(InterfaceController.DEFINITION);

registerComponentController(EntityTool.DEFINITION);
registerComponentController(MovementTool.DEFINITION);

registerComponentController(ViveControllerDevice.DEFINITION);
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