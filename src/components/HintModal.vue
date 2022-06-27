<script setup>
import { ref } from 'vue';
import { Modal } from 'bootstrap';

const content = ref('');
const modal = ref(null);

function close() {
  modal.value.hide();
}

function show(words) {
  // 初始化
  if (!modal.value)
    modal.value = new Modal(document.getElementById('myModal'));

  content.value = words;

  modal.value.show();
}

defineExpose({ show });
</script>

<template>
  <div
    id="myModal"
    class="modal fade"
  >
    <div class="modal-dialog modal-dialog bg-white">
      <div class="modal-header">
        <h6 class="modal-title">
          提示
        </h6>
        <button
          type="button"
          class="btn-close"
          @click="close"
        />
      </div>

      <div class="modal-body">
        <p>{{ content }}</p>
      </div>

      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-primary"
          @click="close"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>