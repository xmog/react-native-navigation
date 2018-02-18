[react-native-navigation](../README.md) > ["adapters/NativeCommandsSender"](../modules/_adapters_nativecommandssender_.md) > [NativeCommandsSender](../classes/_adapters_nativecommandssender_.nativecommandssender.md)



# Class: NativeCommandsSender

## Index

### Constructors

* [constructor](_adapters_nativecommandssender_.nativecommandssender.md#constructor)


### Methods

* [dismissAllModals](_adapters_nativecommandssender_.nativecommandssender.md#dismissallmodals)
* [dismissModal](_adapters_nativecommandssender_.nativecommandssender.md#dismissmodal)
* [dismissOverlay](_adapters_nativecommandssender_.nativecommandssender.md#dismissoverlay)
* [pop](_adapters_nativecommandssender_.nativecommandssender.md#pop)
* [popTo](_adapters_nativecommandssender_.nativecommandssender.md#popto)
* [popToRoot](_adapters_nativecommandssender_.nativecommandssender.md#poptoroot)
* [push](_adapters_nativecommandssender_.nativecommandssender.md#push)
* [setDefaultOptions](_adapters_nativecommandssender_.nativecommandssender.md#setdefaultoptions)
* [setOptions](_adapters_nativecommandssender_.nativecommandssender.md#setoptions)
* [setRoot](_adapters_nativecommandssender_.nativecommandssender.md#setroot)
* [showModal](_adapters_nativecommandssender_.nativecommandssender.md#showmodal)
* [showOverlay](_adapters_nativecommandssender_.nativecommandssender.md#showoverlay)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new NativeCommandsSender**(): [NativeCommandsSender](_adapters_nativecommandssender_.nativecommandssender.md)


*Defined in [adapters/NativeCommandsSender.ts:4](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L4)*





**Returns:** [NativeCommandsSender](_adapters_nativecommandssender_.nativecommandssender.md)

---


## Methods
<a id="dismissallmodals"></a>

###  dismissAllModals

► **dismissAllModals**(): `any`



*Defined in [adapters/NativeCommandsSender.ts:48](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L48)*





**Returns:** `any`





___

<a id="dismissmodal"></a>

###  dismissModal

► **dismissModal**(componentId: *`string`*): `any`



*Defined in [adapters/NativeCommandsSender.ts:44](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L44)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |





**Returns:** `any`





___

<a id="dismissoverlay"></a>

###  dismissOverlay

► **dismissOverlay**(componentId: *`string`*): `any`



*Defined in [adapters/NativeCommandsSender.ts:56](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L56)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |





**Returns:** `any`





___

<a id="pop"></a>

###  pop

► **pop**(componentId: *`string`*, options: *`object`*): `any`



*Defined in [adapters/NativeCommandsSender.ts:27](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L27)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |
| options | `object`   |  - |





**Returns:** `any`





___

<a id="popto"></a>

###  popTo

► **popTo**(componentId: *`string`*): `any`



*Defined in [adapters/NativeCommandsSender.ts:31](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |





**Returns:** `any`





___

<a id="poptoroot"></a>

###  popToRoot

► **popToRoot**(componentId: *`string`*): `any`



*Defined in [adapters/NativeCommandsSender.ts:35](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L35)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |





**Returns:** `any`





___

<a id="push"></a>

###  push

► **push**(onComponentId: *`string`*, layout: *`object`*): `Promise`.<`any`>



*Defined in [adapters/NativeCommandsSender.ts:22](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| onComponentId | `string`   |  - |
| layout | `object`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="setdefaultoptions"></a>

###  setDefaultOptions

► **setDefaultOptions**(options: *`object`*): `void`



*Defined in [adapters/NativeCommandsSender.ts:14](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L14)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `object`   |  - |





**Returns:** `void`





___

<a id="setoptions"></a>

###  setOptions

► **setOptions**(componentId: *`string`*, options: *`object`*): `void`



*Defined in [adapters/NativeCommandsSender.ts:18](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L18)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| componentId | `string`   |  - |
| options | `object`   |  - |





**Returns:** `void`





___

<a id="setroot"></a>

###  setRoot

► **setRoot**(layoutTree: *`object`*): `any`



*Defined in [adapters/NativeCommandsSender.ts:10](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L10)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| layoutTree | `object`   |  - |





**Returns:** `any`





___

<a id="showmodal"></a>

###  showModal

► **showModal**(layout: *`object`*): `Promise`.<`any`>



*Defined in [adapters/NativeCommandsSender.ts:39](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L39)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| layout | `object`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="showoverlay"></a>

###  showOverlay

► **showOverlay**(layout: *`object`*): `any`



*Defined in [adapters/NativeCommandsSender.ts:52](https://github.com/wix/react-native-navigation/blob/961d36be/lib/src/adapters/NativeCommandsSender.ts#L52)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| layout | `object`   |  - |





**Returns:** `any`





___


