// DEPENDENCIES
import { ref } from "vue";

// TYPES
import type { Order } from "@/types/order";
import type { ApiError } from "@/types/errors";

/**
 * Composable for fetching order details.
 */
export function useOrder() {
  const isLoading = ref<boolean>(false);
  const error = ref<ApiError | null>(null);
  const order = ref<Order | null>(null);

  /**
   * It fetches order details from the API and handles loading and error states.
   *
   * @async
   * @param {number} id - The ID of the order to fetch.
   * @throws {ApiError} If the fetch fails.
   * @returns {void}
   */
  async function fetchOrder(id: number): Promise<void> {
    try {
      isLoading.value = true;

      const response = await fetch(`/api/orders/${id}`);

      if (!response.ok) {
        const errorResponse: ApiError = await response.json();

        throw errorResponse;
      }

      const data: Order = await response.json();

      order.value = data;
    } catch (err) {
      error.value = err as ApiError;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    order,
    isLoading,
    error,
    fetchOrder,
  };
}
