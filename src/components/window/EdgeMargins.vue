<template>
  <div>
    <div class="edge-margin-corner"></div>
    <div class="edge-margin-corner"></div>
    <div class="edge-margin-corner"></div>
    <div class="edge-margin-corner"></div>
  </div>
  <div>
    <div class="edge-margin"></div>
    <div class="edge-margin"></div>
    <div class="edge-margin"></div>
    <div class="edge-margin"></div>
  </div>
</template>



<style>
.edge-margin {
  z-index: 110;
  position: fixed;
}

.edge-margin:nth-child(odd) {
  cursor: ns-resize;
  width: 100vw;
  height: var(--calc-edge-size);
}

.edge-margin:nth-child(even) {
  cursor: ew-resize;
  width: var(--calc-edge-size);
  height: 100vh;
}

.edge-margin:nth-of-type(1) {
  top: var(--calc-edge-negative-overflow);
  left: 0;
}

.edge-margin:nth-of-type(2) {
  top: 0;
  right: var(--calc-edge-negative-overflow);
}

.edge-margin:nth-of-type(3) {
  bottom: var(--calc-edge-negative-overflow);
  left: 0;
}

.edge-margin:nth-of-type(4) {
  top: 0;
  left: var(--calc-edge-negative-overflow);
}

.edge-margin-corner {
  z-index: 120;
  position: fixed;

  width: var(--calc-edge-size);
  height: var(--calc-edge-size);
}

.edge-margin-corner:nth-child(odd) {
  cursor: nwse-resize;
}

.edge-margin-corner:nth-child(even) {
  cursor: nesw-resize;
}

.edge-margin-corner:nth-of-type(1) {
  top: var(--calc-edge-negative-overflow);
  left: var(--calc-edge-negative-overflow);
}

.edge-margin-corner:nth-of-type(2) {
  top: var(--calc-edge-negative-overflow);
  right: var(--calc-edge-negative-overflow);
}

.edge-margin-corner:nth-of-type(3) {
  bottom: var(--calc-edge-negative-overflow);
  right: var(--calc-edge-negative-overflow);
}

.edge-margin-corner:nth-of-type(4) {
  bottom: var(--calc-edge-negative-overflow);
  left: var(--calc-edge-negative-overflow);
}
</style>