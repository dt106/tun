import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<MainTabParamList>;
  Place: { placeId: string };
  DishThread: { placeId: string; dishId: string };
};

export type MainTabParamList = {
  Map: undefined;
  Explore: undefined;
  Compose: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type RootStackProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type MapTabProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Map'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type ExploreTabProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Explore'>,
  NativeStackScreenProps<RootStackParamList>
>;
