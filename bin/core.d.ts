import { Point } from './geometry';
export interface Config {
    async?: boolean;
    options?: Options;
    noWorker?: boolean;
    worklyURL?: string;
}
export interface DrawingSurface {
    width: number | SVGAnimatedLength;
    height: number | SVGAnimatedLength;
}
export interface Options {
    maxRandomnessOffset: number;
    roughness: number;
    bowing: number;
    stroke: string;
    strokeWidth: number;
    curveTightness: number;
    curveStepCount: number;
    fill: string | null;
    fillStyle: string;
    fillWeight: number;
    hachureAngle: number;
    hachureGap: number;
    simplification?: number;
}
export declare type OpType = 'move' | 'bcurveTo' | 'lineTo' | 'qcurveTo';
export declare type OpSetType = 'path' | 'fillPath' | 'fillSketch' | 'path2Dfill' | 'path2Dpattern';
export interface Op {
    op: OpType;
    data: number[];
}
export interface OpSet {
    type: OpSetType;
    ops: Op[];
    size?: Point;
    path?: string;
}
export interface Drawable {
    shape: string;
    options: Options;
    sets: OpSet[];
}
export interface PathInfo {
    d: string;
    stroke: string;
    strokeWidth: number;
    fill?: string;
    pattern?: PatternInfo;
}
export interface PatternInfo {
    x: number;
    y: number;
    width: number;
    height: number;
    viewBox: string;
    patternUnits: string;
    path: PathInfo;
}
