[react-native-navigation](../README.md) > ["Navigation"](../modules/_navigation_.md) > [Navigation](../classes/_navigation_.navigation.md)



# Class: Navigation

## Index

### Constructors

* [constructor](_navigation_.navigation.md#constructor)


### Properties

* [Element](_navigation_.navigation.md#element)


### Methods

* [dismissAllModals](_navigation_.navigation.md#dismissallmodals)
* [dismissModal](_navigation_.navigation.md#dismissmodal)
* [dismissOverlay](_navigation_.navigation.md#dismissoverlay)
* [events](_navigation_.navigation.md#events)
* [pop](_navigation_.navigation.md#pop)
* [popTo](_navigation_.navigation.md#popto)
* [popToRoot](_navigation_.navigation.md#poptoroot)
* [push](_navigation_.navigation.md#push)
* [registerComponent](_navigation_.navigation.md#registercomponent)
* [setDefaultOptions](_navigation_.navigation.md#setdefaultoptions)
* [setOptions](_navigation_.navigation.md#setoptions)
* [setRoot](_navigation_.navigation.md#setroot)
* [showModal](_navigation_.navigation.md#showmodal)
* [showOverlay](_navigation_.navigation.md#showoverlay)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Navigation**(): [Navigation](_navigation_.navigation.md)


*Defined in [Navigation.ts:25](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L25)*





**Returns:** [Navigation](_navigation_.navigation.md)

---


## Properties
<a id="element"></a>

###  Element

**●  Element**:  *`any`* 

*Defined in [Navigation.ts:15](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L15)*





___


## Methods
<a id="dismissallmodals"></a>

###  dismissAllModals

► **dismissAllModals**(): `Promise`.<`any`>



*Defined in [Navigation.ts:89](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L89)*



Dismiss all Modals




**Returns:** `Promise`.<`any`>





___

<a id="dismissmodal"></a>

###  dismissModal

► **dismissModal**(componentId: *`string`*): `Promise`.<`any`>



*Defined in [Navigation.ts:82](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L82)*



Dismiss a modal by componentId. The dismissed modal can be anywhere in the stack.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="dismissoverlay"></a>

###  dismissOverlay

► **dismissOverlay**(componentId: *`string`*): `Promise`.<`any`>



*Defined in [Navigation.ts:131](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L131)*



dismiss overlay by componentId


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="events"></a>

###  events

► **events**(): [PublicEventsRegistry](_events_publiceventsregistry_.publiceventsregistry.md)



*Defined in [Navigation.ts:138](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L138)*



Obtain the events registry instance




**Returns:** [PublicEventsRegistry](_events_publiceventsregistry_.publiceventsregistry.md)





___

<a id="pop"></a>

###  pop

► **pop**(componentId: *`string`*, params: *`any`*): `Promise`.<`any`>



*Defined in [Navigation.ts:103](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L103)*



Pop a component from the stack, regardless of it's position.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |
| params | `any`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="popto"></a>

###  popTo

► **popTo**(componentId: *`string`*): `Promise`.<`any`>



*Defined in [Navigation.ts:110](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L110)*



Pop the stack to a given component


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="poptoroot"></a>

###  popToRoot

► **popToRoot**(componentId: *`string`*): `Promise`.<`any`>



*Defined in [Navigation.ts:117](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L117)*



Pop the component's stack to root.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="push"></a>

###  push

► **push**(componentId: *`string`*, layout: *`any`*): `Promise`.<`any`>



*Defined in [Navigation.ts:96](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L96)*



Push a new layout into this screen's navigation stack.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |
| layout | `any`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="registercomponent"></a>

###  registerComponent

► **registerComponent**(componentName: *`string`*, getComponentClassFunc: *`ComponentProvider`*): `void`



*Defined in [Navigation.ts:47](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L47)*



Every navigation component in your app must be registered with a unique name. The component itself is a traditional React component extending React.Component.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentName | `string`   |  - |
| getComponentClassFunc | `ComponentProvider`   |  - |





**Returns:** `void`





___

<a id="setdefaultoptions"></a>

###  setDefaultOptions

► **setDefaultOptions**(options: *`any`*): `void`



*Defined in [Navigation.ts:61](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L61)*



Set default options to all screens. Useful for declaring a consistent style across the app.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `any`   |  - |





**Returns:** `void`





___

<a id="setoptions"></a>

###  setOptions

► **setOptions**(componentId: *`string`*, options: *`any`*): `void`



*Defined in [Navigation.ts:68](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L68)*



Change a component's navigation options


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |
| options | `any`   |  - |





**Returns:** `void`





___

<a id="setroot"></a>

###  setRoot

► **setRoot**(layout: *`any`*): `Promise`.<`any`>



*Defined in [Navigation.ts:54](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L54)*



Reset the app to a new layout


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| layout | `any`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="showmodal"></a>

###  showModal

► **showModal**(layout: *`any`*): `Promise`.<`any`>



*Defined in [Navigation.ts:75](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L75)*



Show a screen as a modal.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| layout | `any`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="showoverlay"></a>

###  showOverlay

► **showOverlay**(layout: *`any`*): `Promise`.<`any`>



*Defined in [Navigation.ts:124](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/Navigation.ts#L124)*



Show overlay on top of the entire app


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| layout | `any`   |  - |





**Returns:** `Promise`.<`any`>





___


