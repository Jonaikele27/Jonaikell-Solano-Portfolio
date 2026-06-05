<script setup lang="ts">
export interface Props {
  items: {
    src: string;
    alt?: string;
    caption?: string;
  }[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="media-pair">
    <figure class="media-pair-item" v-for="item in props.items" :key="item.src">
      <img class="media-pair-image" :src="item.src" :alt="item.alt" loading="lazy" fetchpriority="high" />
      <figcaption class="media-pair-caption" v-if="item.caption">{{ item.caption }}</figcaption>
    </figure>
  </div>
</template>

<style scoped lang="scss">
.media-pair {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  grid-column: 1 / 13;

  @include mixins.mq("md") {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-column: 3 / 11;
  }

  @include mixins.mq("lg") {
    grid-column: 4 / 10;
  }

  &-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    min-width: 0;
  }

  &-image {
    width: 100%;
    max-height: 720px;
    object-fit: contain;
    border-radius: var(--radius-lg);
    background-color: var(--color-background-300);
  }

  &-caption {
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-text-300);
    text-align: center;
  }
}
</style>
